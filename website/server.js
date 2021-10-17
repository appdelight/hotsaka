const cluster = require("cluster");
const debug = require("debug")("quiddity:server");
const http = require("http");
const numCPUs = require("os").cpus().length;
const port = process.env.PORT || "3000";
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const next = require("next");
const dev = true;
const app = next({ dev });
const handle = app.getRequestHandler();
var compression = require("compression");

app.prepare()
    .then(() => {
        const server = express();
        server.use(compression());
        server.use(bodyParser.urlencoded({ extended: false }));
        server.use(bodyParser.json());

        server.get("/sitemap_index.xml", (req, res) => {
            // Don't cache service worker is a best practice (otherwise clients wont get emergency bug fix)
            res.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
            res.set("Content-Type", "application/xml");
            res.sendFile(path.join(__dirname, "sitemap_index.xml"));
        });

        server.get("/firebase-messaging-sw.js", async (req, res) => {
            // Don't cache service worker is a best practice (otherwise clients wont get emergency bug fix)
            res.sendFile(path.join(__dirname, "public", "firebase-messaging-sw.js"));
        });

        server.get("/sw.js", (req, res) => {
            res.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
            res.set("Content-Type", "application/javascript");
            res.sendFile(path.join(__dirname, "public", "sw.js"));
        });

        server.get("/robots.txt", (req, res) => {
            // Don't cache service worker is a best practice (otherwise clients wont get emergency bug fix)
            res.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
            res.set("Content-Type", "text/plain");
            res.sendFile(path.join(__dirname, "public", "robots.txt"));
            // res.send("google.com, pub-6604908833616507, DIRECT, f08c47fec0942fa0");
        });
        server.get("*", (req, res) => {
            return handle(req, res);
        });

        server.set("port", port);

        if (cluster.isMaster) {
            for (let i = 0; i < numCPUs; i++) {
                cluster.fork();
            }

            cluster.on("exit", (worker, code, signal) => {
                cluster.fork();
            });

            cluster.on("listening", (worker, address) => {
                // console.info("Worker started with PID " + worker.process.pid + ".");
            });
        } else {
            let ns = http.createServer(server);

            ns.listen(port);

            ns.on("error", (error) => {
                if (error.syscall !== "listen") {
                    throw error;
                }

                const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

                switch (error.code) {
                    case "EACCES":
                        console.error(bind + " requires elevated privileges");
                        process.exit(1);
                        break;
                    case "EADDRINUSE":
                        console.error(bind + " is already in use");
                        process.exit(1);
                        break;
                    default:
                        throw error;
                }
            });

            ns.on("listening", () => {
                const addr = ns.address();
                const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
                debug("Listening on " + bind);
            });
        }
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1);
    });

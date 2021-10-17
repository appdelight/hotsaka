import parse from "html-react-parser";
import { IDrawerProps } from "../HOC/DrawerHoc";
import { IDrawersNames } from "./types";
import { DrawerClose, DrawerOpen } from "./RxJsTopics";


export const open_drawer = (data: IDrawerProps) => 
{
  return DrawerOpen.next(data)
}


export const close_drawer = (Name: IDrawersNames) => 
{
  return DrawerClose.next(Name)
}


 /**
 * @description use this method to pause a task for sometime
 * @author jagannath
 * @date 09/09/2021
 * @param time time in milliseconds
 * @return Promise()
 */
  export const sleep = (time: number) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(true)
    }, time);
});


// /**
//  * @description use this method to parse query params 
//  * @author jagannath
//  * @date 09/09/2021
//  * @param param url query params - search params
//  * @return ex: {key: value}
//  */
// export const parseQuery =(query:string) => {
//     query = query.trim().replace(/^[?#&]/, '');
//     const queryParam = {}
//     for (const param of query.split('&')) {
// 		if (param === '') {
// 			continue;
// 		}
//         let [key, value] = param.split('=');
//         queryParam[key] = value;
// 	}
//     return queryParam
// }

 /**
 * @description use this method to parse url pathname (routes into an array)
 * @author jagannath
 * @date 09/09/2021
 * @param param url pathname
 * @return string[] - ex: ["signup", "merchant"]
 */
export const parseParam = (param: string): string[] => {
    param = param.trim().replace(/^[/#&]/, '');
    return param.split('/')
}

// returns true if mobile device, false otherwise
export const detectDevice = (): boolean => {
    let isMobileView = (navigator.userAgent
    ).match(/Android|BlackBerry|iPhone|iPod|Opera Mini|IEMobile|WPDesktop/i);
    return Boolean(isMobileView);
};

export const linkify = (text:string) => {
    var urlRegex =
      /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;
    return text.replace(urlRegex, function (url) {
      let urlInstance = url;
      if (!urlInstance.startsWith("http")) {
        urlInstance = "https://" + url;
      }
      return '<a target="_blank" href="' + urlInstance + '">' + url + "</a>";
    });
  };
  
  export const parseUrlText = (text:string) => {
    return parse(linkify(text));
  };



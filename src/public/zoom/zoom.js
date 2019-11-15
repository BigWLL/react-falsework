/**
 * @Author: wll
 * @Description: 对document.body进行缩放，使得body尺寸始终保持config中声明的尺寸
 */
import './zoom.css'
import config from 'config/project.config.json';

const body = document.getElementsByTagName('body')[0];

let lastScale = [1, 1];

/**
 * @Author: wll
 *  根据当前窗口大小缩放页面
 * window.innerWidth/innerHeight： 获取窗口的高度与宽度(不包含工具条与滚动条):
 */
export default function zoom() {
    const x = window.innerWidth / config.pageWidth;
    const y = window.innerHeight / config.pageHeight;

    lastScale = [x, y];
    // body setAttribute() 方法添加指定的属性，并为其赋指定的值
    body.setAttribute('style', `transform:scale(${x}, ${y})`);
}

/**
 *  开启zoom
 */
export function adaptZoom() {

    body.setAttribute('class', 'zoomify');
    body.setAttribute('width', config.pageWidth);
    body.setAttribute('height', config.pageHeight);

}


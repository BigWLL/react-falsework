/**
 * @Author: wll
 * @Description: 页面渲染前加载配置项
  */

import { adaptZoom, default as zoom } from './zoom'

import config from 'config/project.config';
if(config.zoom) {
    // 为true，启用自动缩放
    adaptZoom()
    window.addEventListener('resize', zoom)
    zoom()
}


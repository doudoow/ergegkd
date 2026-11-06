// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "U净",
  "id": "com.midea.vm.washer",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "quickFind": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<=10]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-首页-领劵",
      "desc": "关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "ImageView[id=\"com.midea.vm.washer:id/close_img\"]",
          "snapshotUrls": "https://i.gkd.li/import/14661498",
          "key": 0
        },
        {
          "matches": "@ImageView <2 * <2 FrameLayout[id=\"com.midea.vm.washer:id/bootstrap_weex_layout\"]",
          "snapshotUrls": "https://i.gkd.li/import/14814072",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-首页-左侧领劵",
      "desc": "关闭",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "ImageView[id=\"com.midea.vm.washer:id/closeButton\"]",
          "activityIds": "com.midea.vm.washer.ui.activity.IndexActivity",
          "snapshotUrls": "https://i.gkd.li/import/14818918",
          "key": 0
        }
      ]
    }
  ]
});

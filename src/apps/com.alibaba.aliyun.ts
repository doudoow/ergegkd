// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "阿里云",
  "id": "com.alibaba.aliyun",
  "groups": [
    {
      "name": "权限提示-通知权限",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[text^=\"打开手机消息通知\"] + * >2 [text=\"以后再说\"]",
          "activityIds": ".biz.home.mine.activity.KFeeCenterActivity",
          "snapshotUrls": "https://i.gkd.li/i/13446162",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-请求开启通知权限弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[text^=\"打开手机消息通知\"] + * >2 [text=\"以后再说\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "其他-关闭[添加小组件提示]",
      "key": 2,
      "rules": [
        {
          "matches": "[vid=\"iv_close_tip\"][clickable=true]",
          "activityIds": ".biz.home.MainV5Activity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/26159018",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-请求开启通知权限弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[text^=\"打开手机消息通知\"] + * >2 [text=\"以后再说\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "请求开启通知权限弹窗",
      "enable": false,
      "quickFind": true,
      "key": 4,
      "rules": [
        {
          "matches": "[text^=\"打开手机消息通知\"] + * >2 [text=\"以后再说\"]",
          "key": 0
        }
      ]
    }
  ]
});

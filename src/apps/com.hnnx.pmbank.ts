// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "河南农信",
  "id": "com.hnnx.pmbank",
  "groups": [
    {
      "name": "未分类-版本更新",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"是否下载最新版客户端？\"] <<n [id=\"android:id/parentPanel\"] Button[text=\"取消\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"是否下载最新版客户端？\"] <<n [id=\"android:id/parentPanel\"] Button[text=\"取消\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "版本更新",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"是否下载最新版客户端？\"] <<n [id=\"android:id/parentPanel\"] Button[text=\"取消\"]",
          "key": 0
        }
      ]
    }
  ]
});

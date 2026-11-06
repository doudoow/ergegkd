// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Android 系统文件选择器",
  "id": "com.google.android.documentsui",
  "groups": [
    {
      "name": "功能类-授权第三方应用访问文件夹",
      "desc": "自动点击\"使用此文件夹\"->\"允许\"",
      "enable": false,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"使用此文件夹\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12799610"
        },
        {
          "matches": "[text=\"取消\"] + [text=\"允许\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12799603"
        }
      ]
    },
    {
      "name": "未分类-授权第三方应用访问文件夹",
      "desc": "自动点击【使用此文件夹】->【允许】",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"使用此文件夹\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12799610"
        },
        {
          "matches": "[text=\"取消\"] + [text=\"允许\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12799603"
        }
      ]
    },
    {
      "name": "授权第三方应用访问文件夹",
      "desc": "自动点击【使用此文件夹】->【允许】",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"使用此文件夹\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12799610"
        },
        {
          "matches": "[text=\"取消\"] + [text=\"允许\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/12799603"
        }
      ]
    }
  ]
});

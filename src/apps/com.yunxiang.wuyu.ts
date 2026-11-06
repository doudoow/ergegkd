// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "特狗APP",
  "id": "com.yunxiang.wuyu",
  "groups": [
    {
      "name": "通知提示-公告弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[desc=\"我知道了\"]",
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13455634",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "ImageView < @ViewGroup[clickable=true] < ViewGroup +n ViewGroup [text=\"广告\"]",
          "key": 0,
          "name": "\"x\"型",
          "snapshotUrls": "https://i.gkd.li/i/13455628"
        },
        {
          "matches": [
            "TextView[text=\"广告\"]",
            "@ViewGroup > TextView[text=\"跳过\"]"
          ],
          "key": 1,
          "name": "\"跳过\"型",
          "snapshotUrls": "https://i.gkd.li/i/13455629"
        }
      ]
    },
    {
      "name": "未分类-公告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 2,
      "rules": [
        {
          "matches": "[desc^=\"人生嘛\"] +4 ImageView[clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "ImageView < @ViewGroup[clickable=true] < ViewGroup +n ViewGroup [text=\"广告\"]",
          "name": "【x】型",
          "snapshotUrls": "https://i.gkd.li/i/13455628",
          "key": 0
        },
        {
          "matches": [
            "TextView[text=\"广告\"]",
            "@ViewGroup > TextView[text=\"跳过\"]"
          ],
          "name": "【跳过】型",
          "snapshotUrls": "https://i.gkd.li/i/13455629",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-公告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 4,
      "rules": [
        {
          "matches": "[desc^=\"人生嘛\"] +4 ImageView[clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "ImageView < @ViewGroup[clickable=true] < ViewGroup +n ViewGroup [text=\"广告\"]",
          "name": "【x】型",
          "snapshotUrls": "https://i.gkd.li/import/13455628",
          "key": 0
        },
        {
          "matches": [
            "TextView[text=\"广告\"]",
            "@ViewGroup > TextView[text=\"跳过\"]"
          ],
          "name": "【跳过】型",
          "snapshotUrls": "https://i.gkd.li/import/13455629",
          "key": 1
        }
      ]
    },
    {
      "name": "公告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 6,
      "rules": [
        {
          "matches": "[desc^=\"人生嘛\"] +4 ImageView[clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 7,
      "rules": [
        {
          "matches": "ImageView < @ViewGroup[clickable=true] < ViewGroup +n ViewGroup [text=\"广告\"]",
          "name": "【x】型",
          "snapshotUrls": "https://i.gkd.li/import/13455628",
          "key": 0
        },
        {
          "matches": [
            "TextView[text=\"广告\"]",
            "@ViewGroup > TextView[text=\"跳过\"]"
          ],
          "name": "【跳过】型",
          "snapshotUrls": "https://i.gkd.li/import/13455629",
          "key": 1
        }
      ]
    }
  ]
});

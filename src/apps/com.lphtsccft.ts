// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "涨乐财富通",
  "id": "com.lphtsccft",
  "groups": [
    {
      "name": "全屏广告-首页弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.lphtsccft:id/tv_never\"][text=\"不再提醒\"]",
          "activityIds": [
            "com.lphtsccft.zhangle.startup.SplashScreenActivity",
            "com.lphtsccft.zhangle.main.MainActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12646899",
            "https://i.gkd.li/i/12646925"
          ],
          "key": 0
        },
        {
          "matches": "[vid=\"tv_never\"][text=\"不再提醒\"]",
          "activityIds": [
            ".zhangle.startup.SplashScreenActivity",
            ".zhangle.main.MainActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12646899",
            "https://i.gkd.li/i/12646925"
          ],
          "key": 1
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
      "order": -9,
      "key": 1,
      "rules": [
        {
          "matches": "[text*=\"升级体验\"] +2 LinearLayout > [text=\"取消\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12699308"
        },
        {
          "matches": "[vid=\"iv_update_close\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/16760030"
        }
      ]
    },
    {
      "name": "局部广告-右侧悬浮广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.lphtsccft:id/home_float_close\"]",
          "activityIds": "com.lphtsccft.zhangle.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12892821",
          "key": 0
        },
        {
          "matches": "[vid=\"home_float_close\"]",
          "activityIds": ".zhangle.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12892821",
          "key": 1
        },
        {
          "matches": "[id=\"com.lphtsccft:id/home_float_close\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "未分类-首页广告弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.lphtsccft:id/tv_never\"][text=\"不再提醒\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-右侧悬浮广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.lphtsccft:id/home_float_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-首页广告弹窗",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.lphtsccft:id/tv_never\"][text=\"不再提醒\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页广告弹窗",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.lphtsccft:id/tv_never\"][text=\"不再提醒\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "[text*=\"升级体验\"] +2 LinearLayout > [text=\"取消\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "右侧悬浮广告",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "[id=\"com.lphtsccft:id/home_float_close\"]",
          "key": 0
        }
      ]
    }
  ]
});

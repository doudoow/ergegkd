// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "邮储银行",
  "id": "com.yitong.mbank.psbc",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "Button[id=\"com.yitong.mbank.psbc:id/bt_cancel\"]",
          "activityIds": [
            ".module.home.view.activity.MainActivity",
            ".module.app.view.customview.dialog.DialogUpdateApk"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12685350",
            "https://i.gkd.li/i/13695462"
          ],
          "key": 0
        },
        {
          "matches": "Button[vid=\"bt_cancel\"]",
          "activityIds": [
            ".module.home.view.activity.MainActivity",
            ".module.app.view.customview.dialog.DialogUpdateApk"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12685350",
            "https://i.gkd.li/i/13695462"
          ],
          "key": 1
        },
        {
          "matches": "Button[id=\"com.yitong.mbank.psbc:id/bt_cancel\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12685350",
            "https://i.gkd.li/import/13695462"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-首页弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.yitong.mbank.psbc:id/iv_theme\"] + [id=\"com.yitong.mbank.psbc:id/iv_theme_close_btn\"]",
          "activityIds": "com.yitong.mbank.psbc.module.home.view.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12755516",
          "key": 0
        },
        {
          "matches": "[vid=\"iv_theme\"] + [vid=\"iv_theme_close_btn\"]",
          "activityIds": ".module.home.view.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12755516",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-首页-浮窗广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.yitong.mbank.psbc:id/img_close_float_window\"]",
          "actionMaximum": 1,
          "activityIds": "com.yitong.mbank.psbc.module.home.view.activity.MainActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "snapshotUrls": "https://i.gkd.li/i/13797314",
          "key": 0
        },
        {
          "matches": "[vid=\"img_close_float_window\"]",
          "actionMaximum": 1,
          "activityIds": ".module.home.view.activity.MainActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "snapshotUrls": "https://i.gkd.li/i/13797314",
          "key": 1
        },
        {
          "matches": "[id=\"com.yitong.mbank.psbc:id/img_close_float_window\"]",
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
          "matches": "[id=\"com.yitong.mbank.psbc:id/iv_theme\"] + [id=\"com.yitong.mbank.psbc:id/iv_theme_close_btn\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-首页-浮窗广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.yitong.mbank.psbc:id/img_close_float_window\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "其他-无视网络代理风险[继续]使用",
      "desc": "点击[知晓风险, 继续使用]",
      "key": 5,
      "rules": [
        {
          "matches": "[text*=\"正在使用网络代理\"] +n [text$=\"继续使用\"][clickable=true]",
          "activityIds": ".module.home.view.activity.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/27544847",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-浮窗广告",
      "desc": "关闭首页右侧的悬浮窗广告",
      "enable": false,
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "[vid=\"img_close_float_window\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-首页广告弹窗",
      "desc": "关闭首页弹出的全屏主题广告",
      "enable": false,
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.yitong.mbank.psbc:id/iv_theme\"] + [id=\"com.yitong.mbank.psbc:id/iv_theme_close_btn\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "quickFind": true,
      "key": 8,
      "rules": [
        {
          "matches": "Button[id=\"com.yitong.mbank.psbc:id/bt_cancel\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12685350",
            "https://i.gkd.li/import/13695462"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "首页广告弹窗",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "[id=\"com.yitong.mbank.psbc:id/iv_theme\"] + [id=\"com.yitong.mbank.psbc:id/iv_theme_close_btn\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页-浮窗广告",
      "enable": false,
      "key": 10,
      "rules": [
        {
          "matches": "[id=\"com.yitong.mbank.psbc:id/img_close_float_window\"]",
          "key": 0
        }
      ]
    }
  ]
});

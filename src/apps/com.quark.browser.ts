// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "夸克浏览器",
  "id": "com.quark.browser",
  "groups": [
    {
      "name": "其他-设置默认浏览器提示",
      "desc": "点击取消",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@Button[text=\"取消\"] + Button[text=\"去设置\"]",
          "activityIds": "com.ucpro.BrowserActivity",
          "snapshotUrls": "https://i.gkd.li/i/13249469",
          "key": 0
        }
      ]
    },
    {
      "name": "更新提示",
      "desc": "点击取消",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "quickFind": true,
      "key": 1,
      "rules": [
        {
          "matches": [
            "[text*=\"版本更新\" || text^=\"优化升级\" || text^=\"发现新版本\"]",
            "[text=\"取消\" || text=\"暂不更新\"][clickable=true]"
          ],
          "activityIds": "com.ucpro.BrowserActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/13292512",
            "https://i.gkd.li/i/13455360",
            "https://i.gkd.li/i/24786251",
            "https://i.gkd.li/i/16643051"
          ],
          "key": 0
        },
        {
          "matches": "@Button[text=\"取消\"] + Button[text=\"更新\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13292512"
        },
        {
          "matches": "@Button[text=\"取消\"] + Button[text=\"确定\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/import/13455360"
        },
        {
          "matches": [
            "[text*=\"版本更新\" || text^=\"优化升级\"]",
            "[text=\"取消\"]"
          ],
          "activityIds": "com.ucpro.BrowserActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/13292512",
            "https://i.gkd.li/i/13455360",
            "https://i.gkd.li/i/16643051"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "ImageView[id=\"com.quark.browser:id/close_img\"][clickable=true]",
          "actionMaximum": 1,
          "activityIds": "com.ucpro.BrowserActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13292571",
          "key": 0
        },
        {
          "matches": "ImageView[id=\"com.quark.browser:id/close_img\"][clickable=true]",
          "key": 1
        },
        {
          "matches": "ImageView[vid=\"close_img\"][clickable=true]",
          "actionMaximum": 1,
          "activityIds": "com.ucpro.BrowserActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13292571",
          "key": 2
        }
      ]
    },
    {
      "name": "局部广告",
      "desc": "点击关闭",
      "key": 3,
      "rules": [
        {
          "matches": "[vid=\"ad_close_layout_container\" || vid=\"rel_close\"][visibleToUser=true]",
          "activityIds": "com.ucpro.BrowserActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/21967140",
            "https://i.gkd.li/i/21967204"
          ],
          "exampleUrls": "https://e.gkd.li/77db7983-bfe0-4701-a580-d5d77a017624"
        },
        {
          "matches": "[vid=\"append_element_view_remove_ad_ll\"][visibleToUser=true]",
          "activityIds": "com.ucpro.BrowserActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/21967126",
          "exampleUrls": "https://e.gkd.li/3a89486e-83c4-4032-bc07-4531921c9d09"
        }
      ]
    },
    {
      "name": "功能类-设置默认浏览器提示",
      "desc": "点击取消",
      "enable": false,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "@Button[text=\"取消\"] + Button[text=\"去设置\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-设置默认浏览器提示",
      "desc": "点击取消",
      "enable": false,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "@Button[text=\"取消\"] + Button[text=\"去设置\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "设置默认浏览器提示",
      "desc": "点击取消",
      "enable": false,
      "actionMaximum": 1,
      "quickFind": true,
      "key": 8,
      "rules": [
        {
          "matches": "@Button[text=\"取消\"] + Button[text=\"去设置\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "actionMaximum": 1,
      "quickFind": true,
      "key": 9,
      "rules": [
        {
          "matches": "ImageView[id=\"com.quark.browser:id/close_img\"][clickable=true]",
          "key": 0
        }
      ]
    }
  ]
});

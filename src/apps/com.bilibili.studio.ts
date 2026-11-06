// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "必剪",
  "id": "com.bilibili.studio",
  "groups": [
    {
      "name": "权限提示-通知权限",
      "desc": "点击[不开启]",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "TextView[text=\"开启设置\"] - TextView[text=\"取消\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12867401"
        },
        {
          "matches": "ImageView[id=\"com.bilibili.studio:id/iv_close\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12908880"
        },
        {
          "matches": "ImageView[id=\"com.bilibili.studio:id/iv_push_tips_close\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/12908886"
        },
        {
          "matches": "ImageView[vid=\"iv_close\"]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/12908880"
        },
        {
          "matches": "ImageView[vid=\"iv_push_tips_close\"]",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/12908886"
        }
      ]
    },
    {
      "name": "更新提示",
      "desc": "勾选\"忽略\"-点击\"以后再说\"",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"忽略此版本的更新\"][checked=false]",
          "key": 0,
          "name": "勾选\"忽略\"",
          "snapshotUrls": "https://i.gkd.li/i/13496049"
        },
        {
          "matches": "[id=\"com.bilibili.studio:id/update_btn_cancel\"]",
          "preKeys": [
            3
          ],
          "name": "点击\"以后再说\"",
          "snapshotUrls": "https://i.gkd.li/i/13496049",
          "key": 1
        },
        {
          "matches": "[vid=\"update_btn_cancel\"]",
          "preKeys": [
            3
          ],
          "name": "点击\"以后再说\"",
          "snapshotUrls": "https://i.gkd.li/i/13496049",
          "key": 2
        },
        {
          "matches": "[id=\"com.bilibili.studio:id/update_cbx_ignore_version\"][checked=false]",
          "key": 3,
          "name": "勾选【忽略】"
        },
        {
          "matches": "[id=\"com.bilibili.studio:id/update_btn_cancel\"]",
          "preKeys": 0,
          "name": "点击【以后再说】",
          "key": 4
        }
      ]
    },
    {
      "name": "未分类-通知权限请求",
      "desc": "会出现在创作、模板、我的页面，自动点击不开启。",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "TextView[text=\"开启设置\"] - TextView[text=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/i/12867401",
          "key": 0
        },
        {
          "matches": "ImageView[id=\"com.bilibili.studio:id/iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12908880",
          "key": 1
        },
        {
          "matches": "ImageView[id=\"com.bilibili.studio:id/iv_push_tips_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12908886",
          "key": 2
        }
      ]
    },
    {
      "name": "未分类-版本更新",
      "desc": "勾选【忽略】-点击【以后再说】",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.bilibili.studio:id/update_cbx_ignore_version\"][checked=false]",
          "key": 0,
          "name": "勾选【忽略】"
        },
        {
          "matches": "[id=\"com.bilibili.studio:id/update_btn_cancel\"]",
          "preKeys": 0,
          "name": "点击【以后再说】",
          "key": 1
        }
      ]
    },
    {
      "name": "权限提示-通知权限请求",
      "desc": "会出现在创作、模板、我的页面，自动点击不开启。",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "TextView[text=\"开启设置\"] - TextView[text=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/import/12867401",
          "key": 0
        },
        {
          "matches": "ImageView[id=\"com.bilibili.studio:id/iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/import/12908880",
          "key": 1
        },
        {
          "matches": "ImageView[id=\"com.bilibili.studio:id/iv_push_tips_close\"]",
          "snapshotUrls": "https://i.gkd.li/import/12908886",
          "key": 2
        }
      ]
    },
    {
      "name": "通知权限请求",
      "desc": "会出现在创作、模板、我的页面，自动点击不开启。",
      "enable": false,
      "quickFind": true,
      "key": 5,
      "rules": [
        {
          "matches": "TextView[text=\"开启设置\"] - TextView[text=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/import/12867401",
          "key": 0
        },
        {
          "matches": "ImageView[id=\"com.bilibili.studio:id/iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/import/12908880",
          "key": 1
        },
        {
          "matches": "ImageView[id=\"com.bilibili.studio:id/iv_push_tips_close\"]",
          "snapshotUrls": "https://i.gkd.li/import/12908886",
          "key": 2
        }
      ]
    },
    {
      "name": "版本更新",
      "desc": "勾选【忽略】-点击【以后再说】",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.bilibili.studio:id/update_cbx_ignore_version\"][checked=false]",
          "key": 0,
          "name": "勾选【忽略】"
        },
        {
          "matches": "[id=\"com.bilibili.studio:id/update_btn_cancel\"]",
          "preKeys": 0,
          "name": "点击【以后再说】",
          "key": 1
        }
      ]
    }
  ]
});

// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "完美校园",
  "id": "com.newcapec.mobile.ncp",
  "groups": [
    {
      "name": "更新提示",
      "desc": "新版本提示弹窗，点击右上角【X】按钮。（需手动开启）",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.newcapec.mobile.ncp:id/iv_close\"]",
          "activityIds": "com.wanxiao.basebusiness.activity.SplashActivity",
          "snapshotUrls": "https://i.gkd.li/i/12843377",
          "key": 0
        },
        {
          "matches": "[vid=\"iv_close\"]",
          "activityIds": "com.wanxiao.basebusiness.activity.SplashActivity",
          "snapshotUrls": "https://i.gkd.li/i/12843377",
          "key": 1
        },
        {
          "matches": "[id=\"com.newcapec.mobile.ncp:id/iv_close\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "其他-密码过期提示弹窗",
      "desc": "点击\"取消\"按钮",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.newcapec.mobile.ncp:id/dialog_oppotion\"]",
          "activityIds": "com.wanxiao.ui.activity.IndexActivity",
          "snapshotUrls": "https://i.gkd.li/i/12843399",
          "key": 0
        },
        {
          "matches": "[vid=\"dialog_oppotion\"]",
          "activityIds": "com.wanxiao.ui.activity.IndexActivity",
          "snapshotUrls": "https://i.gkd.li/i/12843399",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-新版本提示",
      "desc": "新版本提示弹窗，点击右上角【X】按钮。（需手动开启）",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.newcapec.mobile.ncp:id/iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-密码过期提示弹窗",
      "desc": "密码过期提示弹窗，点击【取消】按钮。（需手动开启）",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.newcapec.mobile.ncp:id/dialog_oppotion\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-密码过期提示弹窗",
      "desc": "密码过期提示弹窗，点击【取消】按钮。（需手动开启）",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.newcapec.mobile.ncp:id/dialog_oppotion\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "新版本提示",
      "desc": "新版本提示弹窗，点击右上角【X】按钮。（需手动开启）",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.newcapec.mobile.ncp:id/iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "密码过期提示弹窗",
      "desc": "密码过期提示弹窗，点击【取消】按钮。（需手动开启）",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.newcapec.mobile.ncp:id/dialog_oppotion\"]",
          "key": 0
        }
      ]
    }
  ]
});

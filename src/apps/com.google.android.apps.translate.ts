// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Google翻译",
  "id": "com.google.android.apps.translate",
  "groups": [
    {
      "name": "功能类-关闭登录备份翻译记录弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text=\"备份您的翻译历史记录\"]",
            "[text=\"取消\"]"
          ],
          "activityIds": "com.google.android.apps.translate.TranslateActivity",
          "snapshotUrls": "https://i.gkd.li/i/13495796",
          "key": 0
        },
        {
          "matches": [
            "[text=\"备份您的翻译历史记录\"]",
            "[text=\"取消\"]"
          ],
          "activityIds": ".TranslateActivity",
          "snapshotUrls": "https://i.gkd.li/i/13495796",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-登录弹窗",
      "desc": "登录备份翻译记录",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "Button[id=\"com.google.android.apps.translate:id/sign_in_button\"] + [id=\"com.google.android.apps.translate:id/secondary_action_button\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-登录弹窗",
      "desc": "登录备份翻译记录",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "Button[id=\"com.google.android.apps.translate:id/sign_in_button\"] + [id=\"com.google.android.apps.translate:id/secondary_action_button\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "登录弹窗",
      "desc": "登录备份翻译记录",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 3,
      "rules": [
        {
          "matches": "Button[id=\"com.google.android.apps.translate:id/sign_in_button\"] + [id=\"com.google.android.apps.translate:id/secondary_action_button\"]",
          "key": 0
        }
      ]
    }
  ]
});

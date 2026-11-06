// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "联想",
  "id": "com.lenovo.club.app",
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
          "matches": "[id=\"com.lenovo.club.app:id/tv_title\"][text=\"发现新版本\"] < LinearLayout [text=\"下次再说\"]",
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
          "matches": "[id=\"com.lenovo.club.app:id/tv_title\"][text=\"发现新版本\"] < LinearLayout [text=\"下次再说\"]",
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
          "matches": "[id=\"com.lenovo.club.app:id/tv_title\"][text=\"发现新版本\"] < LinearLayout [text=\"下次再说\"]",
          "key": 0
        }
      ]
    }
  ]
});

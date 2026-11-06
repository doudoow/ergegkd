// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "realme社区",
  "id": "com.realmecomm.app",
  "groups": [
    {
      "name": "功能类-自动签到",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"签到\"][clickable=true][visibleToUser=true]",
          "activityIds": "com.android.realme2.home.view.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/14321155",
          "exampleUrls": "https://m.gkd.li/57941037/18a5751c-0bbd-475d-be6a-5803307111cb",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动点击签到",
      "desc": "自动点击签到",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"tv_check_in\"][text=\"签到\"]",
          "key": 0
        }
      ]
    }
  ]
});

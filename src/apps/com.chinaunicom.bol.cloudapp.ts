// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "联通云盘",
  "id": "com.chinaunicom.bol.cloudapp",
  "groups": [
    {
      "name": "更新提示",
      "desc": "点击取消",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"update_button_cancel\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/13998612",
          "key": 0
        }
      ]
    }
  ]
});

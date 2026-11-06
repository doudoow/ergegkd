// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "i 视频",
  "id": "com.android.VideoPlayer",
  "groups": [
    {
      "name": "青少年模式",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "quickFind": true,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"child_mode_cancel_button\"]",
          "key": 0
        }
      ]
    }
  ]
});

// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "小鹅通",
  "id": "com.xiaoe.client",
  "groups": [
    {
      "name": "更新提示-版本更新弹窗",
      "desc": "点击暂不更新",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "quickFind": true,
      "key": 0,
      "rules": [
        {
          "matches": "FrameLayout[vid=\"centerPopupContainer\"] [text=\"暂不更新\"]",
          "activityIds": "com.xiaoe.app.ui.main.XiaoeMainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13832282",
          "key": 0
        }
      ]
    }
  ]
});

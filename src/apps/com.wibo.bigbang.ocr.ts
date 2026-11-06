// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "布丁扫描",
  "id": "com.wibo.bigbang.ocr",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "quickFind": true,
      "order": -9,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.wibo.bigbang.ocr:id/vivo_upgrade_negative_btn\"][text=\"忽略本次\"]",
          "activityIds": "com.vivo.upgradelibrary.upmode.appdialog.VivoUpgradeActivityDialog",
          "snapshotUrls": "https://i.gkd.li/i/13360281",
          "key": 0
        },
        {
          "matches": "[id=\"com.wibo.bigbang.ocr:id/vivo_upgrade_negative_btn\"][text=\"忽略本次\"]",
          "snapshotUrls": "https://i.gkd.li/i/13360281",
          "key": 1
        },
        {
          "matches": "[vid=\"vivo_upgrade_negative_btn\"][text=\"忽略本次\"]",
          "activityIds": "com.vivo.upgradelibrary.upmode.appdialog.VivoUpgradeActivityDialog",
          "snapshotUrls": "https://i.gkd.li/i/13360281",
          "key": 2
        }
      ]
    }
  ]
});

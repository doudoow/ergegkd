// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "悦通行",
  "id": "com.wwwscn.yuexingbao",
  "groups": [
    {
      "name": "功能类-扫码确认解锁",
      "desc": "扫码成功后点击[确认并解锁]",
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text=\"扫码成功\"]",
            "[text=\"确认并解锁\"]"
          ],
          "activityIds": ".ui.qrcode.ScanResultActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/17632893",
          "exampleUrls": "https://e.gkd.li/31a62ba3-9329-4abe-ab30-99006ffa04d4",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-扫码成功点击【确认并解锁】",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"扫码成功\"] + [vid=\"btn_open_net\"]",
          "activityIds": "com.wwwscn.yuexingbao.ui.qrcode.ScanResultActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/18048927",
          "exampleUrls": "https://e.gkd.li/01d5e4a9-7f70-4d43-ba51-a99c4a1c3d1e",
          "key": 0
        }
      ]
    }
  ]
});

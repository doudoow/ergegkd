// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "小米蓝牙扩展 (Bluetooth Extension)",
  "id": "com.xiaomi.bluetooth",
  "groups": [
    {
      "name": "功能类-耳机配对弹窗（仅限澎湃os3）",
      "desc": "点击右上角的x",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"pairingClosable\"]",
          "activityIds": "com.android.bluetooth.ble.app.fastconnect.MiuiFastConnectActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/22922962",
          "key": 0
        }
      ]
    }
  ]
});

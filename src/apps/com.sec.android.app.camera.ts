// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "相机",
  "id": "com.sec.android.app.camera",
  "groups": [
    {
      "name": "功能类-提高位置精确度弹窗",
      "desc": "自动点击【确定】",
      "enable": false,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text=\"是否启用【提高位置精确度】？\"]",
            "[text=\"确定\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/14603535",
          "exampleUrls": "https://m.gkd.li/101449500/7ecf6c53-7180-4631-81e3-759bc6f8ff9f",
          "key": 0
        }
      ]
    }
  ]
});

// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "比亚迪王朝",
  "id": "com.byd.aeri.caranywhere",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "order": -9,
      "key": 0,
      "rules": [
        {
          "matches": [
            "[id=\"com.byd.aeri.caranywhere:id/tv_determine\"][text=\"立即安装\"]",
            "[id=\"com.byd.aeri.caranywhere:id/tv_cancel\"]"
          ],
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13348383",
          "key": 0
        },
        {
          "matches": [
            "[vid=\"tv_determine\"][text=\"立即安装\"]",
            "[vid=\"tv_cancel\"]"
          ],
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13348383",
          "key": 1
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": [
            "[id=\"com.byd.aeri.caranywhere:id/tv_determine\"][text=\"立即安装\"]",
            "[id=\"com.byd.aeri.caranywhere:id/tv_cancel\"]"
          ],
          "quickFind": true,
          "snapshotUrls": "https://i.gkd.li/import/13348383",
          "key": 0
        }
      ]
    }
  ]
});

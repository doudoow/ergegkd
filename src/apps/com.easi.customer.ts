// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "EASI",
  "id": "com.easi.customer",
  "groups": [
    {
      "name": "全屏广告",
      "key": 0,
      "rules": [
        {
          "matches": [
            "ViewGroup[childCount=2 || childCount=3] > [vid=\"iv_home_ad_close\" || vid=\"iv_close\"][clickable=true][visibleToUser=true]"
          ],
          "activityIds": [
            "com.haya.app.pandah4a.ui.sale.home.container.HomeContainerActivity",
            "com.haya.app.pandah4a.ui.pay.success.order.PaySuccessActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/27085660",
            "https://i.gkd.li/i/27085659",
            "https://i.gkd.li/i/27085658"
          ]
        }
      ]
    }
  ]
});

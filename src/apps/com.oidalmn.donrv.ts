// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "番喜视频",
  "id": "com.oidalmn.donrv",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": "@[desc=\"top_close_button\"] < ViewGroup[childCount=1] <n ViewGroup >(2,3) [text=\"广告\"][visibleToUser=true]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/24325415",
            "https://i.gkd.li/i/24325538"
          ],
          "exampleUrls": "https://e.gkd.li/0e4b7af0-5708-4be7-b1e9-87b469d9cadb"
        },
        {
          "matches": "@ImageView[childCount=0][width<80 && height<80] < FrameLayout[childCount=1] - FrameLayout >3 [text$=\"了解更多内容\"][visibleToUser=true]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/24377039",
          "exampleUrls": "https://e.gkd.li/84da57a5-611d-4330-99b7-ca977d48da78"
        }
      ]
    }
  ]
});

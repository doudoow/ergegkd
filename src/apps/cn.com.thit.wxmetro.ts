// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "码上行",
  "id": "cn.com.thit.wxmetro",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"iv_close\"][visibleToUser=true]",
          "activityIds": [
            "com.bwton.metro.bwtadui.business.popup.PopDialogFixActivity",
            "com.bwton.metro.tabindicator.business.MainTabActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/20655916",
            "https://i.gkd.li/i/20665105"
          ],
          "exampleUrls": "https://e.gkd.li/398fe885-755b-4929-82f6-92a14157bac7",
          "key": 0
        }
      ]
    }
  ]
});

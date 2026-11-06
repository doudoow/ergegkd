// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "360浏览器",
  "id": "com.qihoo.browser",
  "groups": [
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": "LinearLayout[childCount=3] > TextView[text!=null] + @FrameLayout[id!=null][clickable=true][childCount=1] > ImageView[childCount=0][visibleToUser=true]",
          "activityIds": ".browser.download.ui.DownloadDetailActivity",
          "snapshotUrls": "https://i.gkd.li/i/20218587",
          "exampleUrls": "https://e.gkd.li/4e3c5950-6471-42bf-9785-dab271aa0a55",
          "key": 0
        }
      ]
    }
  ]
});

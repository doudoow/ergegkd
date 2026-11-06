// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "快码万能播放器",
  "id": "com.kmsoft.fvplayer",
  "groups": [
    {
      "name": "全屏广告",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"android:id/content\"] >n FrameLayout[index=2][childCount=1] > ImageView",
          "key": 0,
          "name": "腾讯SDK",
          "snapshotUrls": "https://i.gkd.li/i/14019546"
        },
        {
          "matches": "[vid=\"ksad_tk_view\"] >n @ViewGroup[clickable=true] > ImageView",
          "key": 1,
          "name": "快手SDK",
          "snapshotUrls": "https://i.gkd.li/i/14019547"
        }
      ]
    }
  ]
});

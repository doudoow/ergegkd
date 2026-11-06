// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "爱听书",
  "id": "com.itingshu.hearbook",
  "groups": [
    {
      "name": "全屏广告",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"fl_app_info_bar\"] - [vid=\"xml_interstitial_fl_show_container\"] > [text=\"关闭\"][visibleToUser=true]",
          "activityIds": "io.dcloud.PandoraEntryActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/27268355",
          "exampleUrls": "https://e.gkd.li/4fc8c584-746d-44d4-b3aa-a45eb4ddf792",
          "key": 0
        }
      ]
    }
  ]
});

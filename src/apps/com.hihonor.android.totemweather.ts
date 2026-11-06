// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "荣耀天气",
  "id": "com.hihonor.android.totemweather",
  "groups": [
    {
      "name": "局部广告-底部卡片广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"ad_cancel\" || vid=\"btn_close\"][visibleToUser=true]",
          "activityIds": ".WeatherHome",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/14193808",
            "https://i.gkd.li/i/19659583"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/764769ff-b571-498a-ac57-f4b1ae331056"
        },
        {
          "matches": "[vid=\"ad_cancel\"][visibleToUser=true]",
          "activityIds": "com.hihonor.android.totemweather.WeatherHome",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14193808",
          "exampleUrls": "https://m.gkd.li/57941037/764769ff-b571-498a-ac57-f4b1ae331056",
          "key": 1
        }
      ]
    },
    {
      "name": "分段广告-卡片广告",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"ads_tag\" || vid=\"ad_flag_close_view\"][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/20116008",
            "https://i.gkd.li/i/23259843"
          ],
          "exampleUrls": "https://e.gkd.li/7f9ea2fc-bb89-4aeb-b569-9ddbbd95452b"
        },
        {
          "matches": "[text=\"不感兴趣\"][visibleToUser=true]",
          "preKeys": [
            0
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/20116013",
            "https://i.gkd.li/i/23253602"
          ],
          "exampleUrls": "https://e.gkd.li/38517cb1-c930-40cb-8c95-a4e1ecd57323",
          "key": 1
        }
      ]
    }
  ]
});

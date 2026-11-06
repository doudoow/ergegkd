// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Warplane Inc. Online",
  "id": "com.DL.war.planes.inc.online.bomber.fighter.aircraft.ww2",
  "groups": [
    {
      "name": "全屏广告",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[index=parent.childCount.minus(1)][clickable=true][visibleToUser=true] < ViewGroup <3 ViewGroup <2 ViewGroup +5 [text=\"Learn more\"]",
          "activityIds": "com.yandex.mobile.ads.common.AdActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/25241260"
        },
        {
          "matches": "@ImageView - ViewGroup >2 [text=\"AD\"][visibleToUser=true]",
          "activityIds": "com.yandex.mobile.ads.common.AdActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/25241244"
        },
        {
          "matches": "View[childCount=0] < @FrameLayout[clickable=true][childCount=1] <2 FrameLayout < [id=\"android:id/content\"]",
          "activityIds": "com.applovin.adview.AppLovinFullscreenActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/25241191"
        },
        {
          "anyMatches": [
            "@ImageView[index=parent.childCount.minus(1)][clickable=true][visibleToUser=true] < ViewGroup <3 ViewGroup <2 ViewGroup +5 [text=\"Learn more\"]",
            "@ImageView - ViewGroup >2 [text=\"AD\"][visibleToUser=true]",
            "@[clickable=true] < ViewGroup - * >(1,2) [text^=\"AD\"]",
            "@ImageView[index=parent.childCount.minus(1)][clickable=true][visibleToUser=true] <<(2,3) ViewGroup - *  > * + ViewGroup >2 [text^=\"AD\"]"
          ],
          "activityIds": "com.yandex.mobile.ads.common.AdActivity",
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/25241260",
            "https://i.gkd.li/i/25241244",
            "https://i.gkd.li/i/25855014",
            "https://i.gkd.li/i/26025979",
            "https://i.gkd.li/i/25932452",
            "https://i.gkd.li/i/26025747"
          ]
        },
        {
          "matches": "[vid=\"inter_native_ad_view\"] < [vid=\"inter_main\"] + [vid=\"inter_btn_close\"] >2 [vid=\"bigo_ad_btn_close\"][clickable=true][visibleToUser=true]",
          "action": "clickCenter",
          "activityIds": "sg.bigo.ads.api.LandscapeCompanionAdActivity",
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/25854586",
            "https://i.gkd.li/i/25854585"
          ],
          "exampleUrls": [
            "https://e.gkd.li/a492aa5b-9dc7-45c6-afee-23bc2f9a4458",
            "https://e.gkd.li/4e52a61f-057e-46d8-9c37-eb20bfcaaf8b"
          ]
        },
        {
          "matches": "View[childCount=0] < @FrameLayout[clickable=true][childCount=1] <2 FrameLayout < [id=\"android:id/content\"]",
          "activityIds": "com.applovin.adview.AppLovinFullscreenActivity",
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/25241191"
        },
        {
          "anyMatches": [
            "Image - @[text=\"Close button\"] -n Button -2 * < [id*=\"ad\"] <<5 [id=\"android:id/content\"]",
            "@[text=\"Close button\"] <2 View -2 [desc=\"Liftoff Privacy\"] -2 * < [id*=\"_ad\"] <<5 [id=\"android:id/content\"]"
          ],
          "activityIds": "com.vungle.ads.internal.ui.VungleActivity",
          "key": 6,
          "snapshotUrls": [
            "https://i.gkd.li/i/25823455",
            "https://i.gkd.li/i/25823527"
          ]
        }
      ]
    }
  ]
});

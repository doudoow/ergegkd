// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "滴滴出行",
  "id": "com.sdu.didi.psnger",
  "groups": [
    {
      "name": "局部广告-打车页面右上角红包广告",
      "desc": "点击卡片广告左上角x",
      "key": 0,
      "rules": [
        {
          "matches": "ImageView[id=\"com.sdu.didi.psnger:id/second_entrance_img\"] + @ImageView[id=\"com.sdu.didi.psnger:id/left_close_img\"]",
          "activityIds": "com.didi.sdk.app.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13760846",
          "key": 0
        }
      ]
    },
    {
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"iv_upgrade_btn_ignore\"]",
          "activityIds": "com.didi.sdk.app.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14582620",
          "exampleUrls": "https://m.gkd.li/57941037/ba2a4ef6-d63d-4d67-ab89-222085ea3b3f",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "key": 2,
      "rules": [
        {
          "matches": "[vid=\"popClose\"][desc=\"关闭弹窗\"][visibleToUser=true]",
          "actionMaximum": 1,
          "activityIds": "com.didi.sdk.app.MainActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "snapshotUrls": "https://i.gkd.li/i/18173921",
          "exampleUrls": "https://e.gkd.li/432c28dd-2489-47cf-a975-4ef2e4704615",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-[升级一键付款]弹窗",
      "desc": "点击[跳过]",
      "key": 3,
      "rules": [
        {
          "matches": [
            "[text=\"升级一键付款\"][visibleToUser=true]",
            "[text=\"跳过\"][visibleToUser=true]"
          ],
          "activityIds": "com.didi.sdk.app.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/18409807",
          "exampleUrls": "https://e.gkd.li/effbc440-02c9-40a6-b72e-a7df401c985c",
          "key": 0
        }
      ]
    },
    {
      "name": "其他-追加车型提示",
      "key": 4,
      "rules": [
        {
          "matches": [
            "[text=\"追加以下车型 可更快应答\"]",
            "[text=\"暂时不用\"][clickable=true]"
          ],
          "activityIds": "com.didi.sdk.app.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/24560279",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-打车页面广告",
      "desc": "点击广告卡片左上角x",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "ImageView[id=\"com.sdu.didi.psnger:id/second_entrance_img\"] + @ImageView[id=\"com.sdu.didi.psnger:id/left_close_img\"]",
          "activityIds": "com.didi.sdk.app.MainActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13760846"
        },
        {
          "matches": "ImageView[id=`com.sdu.didi.psnger:id/second_entrance_img`] + @ImageView[id=`com.sdu.didi.psnger:id/left_close_img`]",
          "activityIds": "com.didi.sdk.app.MainActivity",
          "snapshotUrls": "https://i.gkd.li/import/13760846",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-优惠券",
      "enable": false,
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "[vid=\"popClose\"][desc=\"关闭弹窗\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-悬浮窗",
      "desc": "点击x掉",
      "key": 7,
      "rules": [
        {
          "matches": "ImageView[vid=\"left_close_img\" || vid=\"thumb_close_iv\"][visibleToUser=true]",
          "activityIds": "com.didi.sdk.app.MainActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/13760846",
            "https://i.gkd.li/i/29299387"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "打车页面广告",
      "desc": "点击广告卡片左上角x",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "ImageView[id=`com.sdu.didi.psnger:id/second_entrance_img`] + @ImageView[id=`com.sdu.didi.psnger:id/left_close_img`]",
          "activityIds": "com.didi.sdk.app.MainActivity",
          "snapshotUrls": "https://i.gkd.li/import/13760846",
          "key": 0
        }
      ]
    }
  ]
});

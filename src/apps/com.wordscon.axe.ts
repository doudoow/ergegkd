// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "句子控",
  "id": "com.wordscon.axe",
  "groups": [
    {
      "name": "全屏广告",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"imv_close\"]",
          "activityIds": ".main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/28225736",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-[取消]转发给AI",
      "desc": "长按句子后出现的弹窗, 点击[取消]",
      "key": 1,
      "rules": [
        {
          "matches": "@[text=\"取消\"][clickable=true] -n [text^=\"转发给AI伙伴\"]",
          "activityIds": [
            ".sentence.AXPostDetailActivity",
            ".main.MainActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/28225915",
            "https://i.gkd.li/i/28226297"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "分段广告",
      "desc": "①点击x掉 ②点击[不感兴趣] ③点击[我知道了]",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "@[clickable=true] < [desc^=\"dislike\"] -2 [childCount=2] >2 [text=\"广告\"]",
          "key": 0,
          "name": "①点击[x]掉",
          "snapshotUrls": [
            "https://i.gkd.li/i/28225949",
            "https://i.gkd.li/i/28226212",
            "https://i.gkd.li/i/28226355"
          ],
          "exampleUrls": "https://e.gkd.li/6a509f3c-811f-49b0-8314-8aaf7b604e5c"
        },
        {
          "matches": "@Image[width<69 && height<69][bottom<getPrev(3).top] < View[index=1] <<n [vid=\"layout_ad_container\"] <<n [vid=\"layout_detail\"] + [vid=\"bt_response\"]",
          "key": 1,
          "name": "①点击x掉",
          "snapshotUrls": "https://i.gkd.li/i/28226759",
          "exampleUrls": "https://e.gkd.li/dae5c8a2-77b4-428d-8568-e9a04bd773e9"
        },
        {
          "matches": "@ImageView[width<71 && height<71] <4 [childCount=4] -2 FrameLayout >3 [text^=\"跳转至\"]",
          "key": 2,
          "name": "①x掉",
          "snapshotUrls": "https://i.gkd.li/i/28227993",
          "exampleUrls": "https://e.gkd.li/6ed41a6d-5e89-4e86-b1d9-de977ca128c0"
        },
        {
          "matches": "@[clickable=true] >2 [text=\"不感兴趣\"]",
          "preKeys": [
            0,
            1,
            2
          ],
          "key": 3,
          "name": "②点击[不感兴趣]",
          "snapshotUrls": [
            "https://i.gkd.li/i/28225930",
            "https://i.gkd.li/i/28226757",
            "https://i.gkd.li/i/28228086"
          ],
          "exampleUrls": "https://e.gkd.li/7847c022-0eec-4d9a-8649-4ed6bde51f29"
        },
        {
          "matches": "[text=\"开通会员\"] -2 [vid=\"tv_cancel\"]",
          "preKeys": [
            3
          ],
          "key": 4,
          "name": "③点击[我知道了]",
          "snapshotUrls": "https://i.gkd.li/i/28226756"
        }
      ]
    }
  ]
});

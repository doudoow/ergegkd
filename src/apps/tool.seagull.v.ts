// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "海鸥加速器",
  "id": "tool.seagull.v",
  "groups": [
    {
      "name": "局部广告-卡片广告",
      "key": 0,
      "rules": [
        {
          "matches": "View[childCount=2] > @Button[clickable=true] - View > View > View > Image",
          "activityIds": "io.github.trojan_gfw.igniter.MainActivity",
          "key": 0,
          "name": "卡片广告-1",
          "snapshotUrls": "https://i.gkd.li/i/13413556"
        }
      ]
    },
    {
      "name": "全屏广告-谷歌广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[desc=\"OPEN\" || desc=\"開啟\"] - @View[clickable=true][visibleToUser=true] > [text=\"关闭\"]",
          "activityIds": [
            "io.github.trojan_gfw.igniter.MainActivity",
            "com.google.android.gms.ads.AdActivity"
          ],
          "key": 0,
          "name": "谷歌广告-1",
          "snapshotUrls": [
            "https://i.gkd.li/i/13426255",
            "https://i.gkd.li/i/13459399"
          ]
        },
        {
          "matches": "@Button[clickable=true][childCount=0] < View[childCount=1] <2 View[childCount=2] - View >3 [desc=\"開啟\"]",
          "activityIds": "com.google.android.gms.ads.AdActivity",
          "key": 1,
          "name": "谷歌广告-2",
          "snapshotUrls": "https://i.gkd.li/i/13476799"
        },
        {
          "matches": "[desc=\"Interstitial close button\"]",
          "activityIds": "com.google.android.gms.ads.AdActivity",
          "key": 2,
          "name": "谷歌广告-3",
          "snapshotUrls": "https://i.gkd.li/i/13476579"
        },
        {
          "matches": [
            "[id=\"mys-wrapper\"] + View >n Image",
            "@View[clickable=true] > [text=\"关闭\"]"
          ],
          "activityIds": [
            "io.github.trojan_gfw.igniter.MainActivity",
            "com.google.android.gms.ads.AdActivity"
          ],
          "key": 3,
          "name": "谷歌广告-1",
          "snapshotUrls": [
            "https://i.gkd.li/import/13426255",
            "https://i.gkd.li/import/13459399"
          ]
        },
        {
          "matches": [
            "[id=\"mys-wrapper\"] + View >n Image",
            "[id=\"mys-wrapper\"] >n View > View > Button"
          ],
          "activityIds": "com.google.android.gms.ads.AdActivity",
          "key": 4,
          "name": "谷歌广告-2",
          "snapshotUrls": "https://i.gkd.li/import/13476799"
        }
      ]
    },
    {
      "name": "未分类-卡片式广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "View[childCount=2] > @Button[clickable=true] - View > View > View > Image",
          "activityIds": "io.github.trojan_gfw.igniter.MainActivity",
          "key": 0,
          "name": "卡片式广告-1",
          "snapshotUrls": "https://i.gkd.li/i/13413556"
        }
      ]
    },
    {
      "name": "未分类-谷歌广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": [
            "[id=\"mys-wrapper\"] + View >n Image",
            "@View[clickable=true] > [text=\"关闭\"]"
          ],
          "activityIds": [
            "io.github.trojan_gfw.igniter.MainActivity",
            "com.google.android.gms.ads.AdActivity"
          ],
          "key": 0,
          "name": "谷歌广告-1",
          "snapshotUrls": [
            "https://i.gkd.li/i/13426255",
            "https://i.gkd.li/i/13459399"
          ]
        },
        {
          "matches": [
            "[id=\"mys-wrapper\"] + View >n Image",
            "[id=\"mys-wrapper\"] >n View > View > Button"
          ],
          "activityIds": "com.google.android.gms.ads.AdActivity",
          "key": 1,
          "name": "谷歌广告-2",
          "snapshotUrls": "https://i.gkd.li/i/13476799"
        },
        {
          "matches": "[desc=\"Interstitial close button\"]",
          "activityIds": "com.google.android.gms.ads.AdActivity",
          "key": 2,
          "name": "谷歌广告-3",
          "snapshotUrls": "https://i.gkd.li/i/13476579"
        }
      ]
    },
    {
      "name": "局部广告-卡片式广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "View[childCount=2] > @Button[clickable=true] - View > View > View > Image",
          "activityIds": "io.github.trojan_gfw.igniter.MainActivity",
          "key": 0,
          "name": "卡片式广告-1",
          "snapshotUrls": "https://i.gkd.li/import/13413556"
        }
      ]
    },
    {
      "name": "卡片式广告",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "View[childCount=2] > @Button[clickable=true] - View > View > View > Image",
          "activityIds": "io.github.trojan_gfw.igniter.MainActivity",
          "key": 0,
          "name": "卡片式广告-1",
          "snapshotUrls": "https://i.gkd.li/import/13413556"
        }
      ]
    },
    {
      "name": "谷歌广告",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": [
            "[id=\"mys-wrapper\"] + View >n Image",
            "@View[clickable=true] > [text=\"关闭\"]"
          ],
          "activityIds": [
            "io.github.trojan_gfw.igniter.MainActivity",
            "com.google.android.gms.ads.AdActivity"
          ],
          "key": 0,
          "name": "谷歌广告-1",
          "snapshotUrls": [
            "https://i.gkd.li/import/13426255",
            "https://i.gkd.li/import/13459399"
          ]
        },
        {
          "matches": [
            "[id=\"mys-wrapper\"] + View >n Image",
            "[id=\"mys-wrapper\"] >n View > View > Button"
          ],
          "activityIds": "com.google.android.gms.ads.AdActivity",
          "key": 1,
          "name": "谷歌广告-2",
          "snapshotUrls": "https://i.gkd.li/import/13476799"
        },
        {
          "matches": "[desc=\"Interstitial close button\"]",
          "activityIds": "com.google.android.gms.ads.AdActivity",
          "key": 2,
          "name": "谷歌广告-3",
          "snapshotUrls": "https://i.gkd.li/import/13476579"
        }
      ]
    }
  ]
});

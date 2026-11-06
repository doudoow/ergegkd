// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "MyTherapy",
  "id": "eu.smartpatient.mytherapy",
  "groups": [
    {
      "name": "全屏广告",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@Button[clickable=true] < [index=parent.childCount.minus(1)] <n View[childCount>1] <n [id=\"mys-content\"] <<10  [id=\"android:id/content\"]",
          "activityIds": "com.google.android.gms.ads.AdActivity",
          "key": 0,
          "name": "形式1",
          "snapshotUrls": [
            "https://i.gkd.li/i/26159508",
            "https://i.gkd.li/i/26159509",
            "https://i.gkd.li/i/26159510"
          ],
          "exampleUrls": [
            "https://e.gkd.li/012e3aca-4d19-46e4-8873-5e4b15cec187",
            "https://e.gkd.li/631c83f3-097b-43e2-a05a-b5349ef211fc"
          ]
        },
        {
          "matches": "[desc=\"Interstitial close button\"][visibleToUser=true] < @FrameLayout <2 [childCount=2] < [id=\"android:id/content\"]",
          "activityIds": "com.google.android.gms.ads.AdActivity",
          "key": 1,
          "name": "形式2",
          "snapshotUrls": "https://i.gkd.li/i/26646224",
          "exampleUrls": "https://e.gkd.li/5400ee80-9f09-426e-97b8-2e0e18add6a3"
        }
      ]
    },
    {
      "name": "功能类-快速添加按需药物",
      "desc": "添加一次性条目-> 按需要(第一个添加的药品)->调整剂量",
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"logOneTimeEntry\"][visibleToUser=true] < @[clickable=true] < View <4 ScrollView < * <2 * <2 View <<2 [id=\"android:id/content\"]",
          "key": 0,
          "name": "添加一次性条目",
          "snapshotUrls": "https://i.gkd.li/i/26223457",
          "exampleUrls": "https://e.gkd.li/6cef22b5-89f0-4a39-ab01-4df740d1556b"
        },
        {
          "matches": "TextView < @View[index=parent.childCount.minus(1)][childCount=1][clickable=true] <n ScrollView <<2 * <2 View <<2 [id=\"android:id/content\"]",
          "matchRoot": true,
          "key": 1,
          "name": "按需要(第一个)",
          "snapshotUrls": "https://i.gkd.li/i/26223492",
          "exampleUrls": "https://e.gkd.li/a1fa2f0b-a011-42bc-b6f4-d520007cf036"
        }
      ]
    },
    {
      "name": "功能类-自动点击剂量调整",
      "desc": "药物界面-> 点击剂量-> 用户输入",
      "resetMatch": "match",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "@[id=\"dosePicker\"][clickable=true][visibleToUser=true] < View <5 ScrollView <<4 [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/28907834",
          "exampleUrls": "https://e.gkd.li/3c6324c0-6c32-4bad-b6f9-4fb5d9dc9132",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-库存低3s自动编辑",
      "desc": "不编辑一般都点确定,编辑你得看一眼剩多少药再编辑",
      "actionDelay": 3000,
      "key": 3,
      "rules": [
        {
          "matches": "[text=\"编辑库存\"] < @[id=\"confirmButton\"][clickable=true] -3 [text=\"库存低\"] < [id=\"dialogBody\"] <<4 [id=\"android:id/content\"]",
          "activityIds": ".multiplatform.feature.inventory.presentation.InventoryLowDialogActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/28907622",
          "exampleUrls": "https://e.gkd.li/0e4c3f4c-37ec-4592-b980-578cdef868c3",
          "key": 0
        }
      ]
    }
  ]
});

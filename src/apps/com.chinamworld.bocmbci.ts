// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "中国银行",
  "id": "com.chinamworld.bocmbci",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "matchRoot": true,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@[desc=\"关闭\"] > [vid=\"btn_action\"]",
          "activityIds": "com.boc.bocsoft.mobile.bocmobile.buss.system.main.ui.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/17691747",
          "exampleUrls": "https://e.gkd.li/988dbaff-68b3-499a-8736-a6e5b3364ed9"
        },
        {
          "matches": "@Image[clickable=true][childCount=0][visibleToUser=true][width<150 && height<150] <2 View[childCount=2] < View <4 View < View < WebView < WebView < [vid=\"webview_layout\"]",
          "activityIds": "com.boc.bocsoft.mobile.bocmobile.buss.system.main.ui.MainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/19567854",
          "exampleUrls": "https://e.gkd.li/13b6fa95-5198-41f5-b39c-d40166a624fb"
        },
        {
          "matches": "@[desc=\"关闭\"] > [vid=\"btn_action\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/17691747",
          "exampleUrls": "https://e.gkd.li/988dbaff-68b3-499a-8736-a6e5b3364ed9"
        },
        {
          "matches": "@Image[text=\"\"][desc=null] <(1,2) View[childCount=2] <<(1,2) View <n [id=\"app\"] <<4 [vid=\"webview_layout\"]",
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/19567854",
            "https://i.gkd.li/i/26644706",
            "https://i.gkd.li/i/29383961"
          ],
          "exampleUrls": [
            "https://e.gkd.li/13b6fa95-5198-41f5-b39c-d40166a624fb",
            "https://e.gkd.li/98cd7f08-a225-4fcc-8c4f-bd92e1359bda"
          ]
        }
      ]
    }
  ]
});

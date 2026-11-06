// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "实用大师",
  "id": "com.practical.master.toolsme",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "key": 0,
      "rules": [
        {
          "matches": "Image[width<60][height<60] < @View <n View [text=\"反馈\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "name": "字节穿山甲SDK",
          "snapshotUrls": [
            "https://i.gkd.li/i/13581740",
            "https://i.gkd.li/i/13582110"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-广告弹窗",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "Image[width<60][height<60] < @View <n View [text=\"反馈\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "name": "字节穿山甲SDK",
          "snapshotUrls": [
            "https://i.gkd.li/i/13581740",
            "https://i.gkd.li/i/13582110"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "Image[width<60][height<60] < @View <n View [text=\"反馈\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "name": "字节穿山甲SDK",
          "snapshotUrls": [
            "https://i.gkd.li/import/13581740",
            "https://i.gkd.li/import/13582110"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "广告弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "Image[width<60][height<60] < @View <n View [text=\"反馈\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "name": "字节穿山甲SDK",
          "snapshotUrls": [
            "https://i.gkd.li/import/13581740",
            "https://i.gkd.li/import/13582110"
          ],
          "key": 0
        }
      ]
    }
  ]
});

// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "biubiu加速器",
  "id": "com.njh.biubiu",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"iv_listitem_dislike\"][visibleToUser=true]",
          "activityIds": "com.njh.ping.speedup.detail.fragment.LaunchVPNActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/19603369",
          "exampleUrls": "https://e.gkd.li/13a828c7-b94d-463f-bceb-a92fa7ff069a",
          "key": 0
        }
      ]
    },
    {
      "name": "开屏广告",
      "desc": "点击跳过",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "order": -10,
      "key": 1,
      "rules": [
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[text=null] <<n [id=\"android:id/content\"]",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14214392",
          "exampleUrls": "https://m.gkd.li/57941037/5c2f4dfe-d7ff-415d-81f0-bca6b5b628cb"
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/16486468",
            "https://i.gkd.li/i/16486469"
          ],
          "exampleUrls": "https://e.gkd.li/f96cc8d8-602e-4d96-a8f3-19088656121b"
        },
        {
          "anyMatches": [
            "@View[clickable=true][text=null][visibleToUser=true] + TextView[index=parent.childCount.minus(1)][text=null] <n FrameLayout[childCount>2] >(7,8,9,10) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\"][visibleToUser=true]",
            "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][text=null][visibleToUser=true] + TextView[index=parent.childCount.minus(1)][text=null][visibleToUser=true]"
          ],
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/14214392",
          "exampleUrls": "https://m.gkd.li/57941037/5c2f4dfe-d7ff-415d-81f0-bca6b5b628cb"
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/16486468",
            "https://i.gkd.li/i/16486469"
          ],
          "exampleUrls": "https://e.gkd.li/f96cc8d8-602e-4d96-a8f3-19088656121b"
        }
      ]
    }
  ]
});

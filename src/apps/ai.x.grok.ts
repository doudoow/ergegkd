// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Grok",
  "id": "ai.x.grok",
  "groups": [
    {
      "name": "评价提示",
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "LinearLayout > [text$=\"您喜欢使用 Grok 吗？\"][visibleToUser=true] + [vid=\"rating_bar\"]",
          "action": "back",
          "activityIds": ".main.GrokActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/26644291",
          "exampleUrls": "https://e.gkd.li/a8196954-6b3f-4af7-a4a2-b43fb04211de",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-发生错误自动重试",
      "desc": "发送提示词,发生错误=> 重试(多为网络错误)",
      "actionCd": 500,
      "key": 1,
      "rules": [
        {
          "matches": "Button - TextView < @[childCount=2][clickable=true] <2 View[childCount=2] < [index=parent.childCount.minus(1)] <n * <<(12-n) [id=\"android:id/content\"]",
          "activityIds": ".main.GrokActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/28557954",
          "exampleUrls": "https://e.gkd.li/b652da53-192a-4bd8-b214-e55b0f40172d",
          "key": 0
        }
      ]
    }
  ]
});

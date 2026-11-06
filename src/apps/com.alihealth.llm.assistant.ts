// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "氢离子",
  "id": "com.alihealth.llm.assistant",
  "groups": [
    {
      "name": "功能类-引用内容自动翻译",
      "desc": "⚠️可能第二次无法点击(无法区分未/已翻译状态)",
      "actionMaximum": 1,
      "key": 0,
      "rules": [
        {
          "matches": "@LinearLayout[clickable=true] > [text=\"翻译\"][visibleToUser=true]",
          "activityIds": ".main.chat.AIAnswerChatActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/28420199",
            "https://i.gkd.li/i/28420124"
          ],
          "exampleUrls": "https://e.gkd.li/4501036a-eded-4a2f-ac4d-6e2457a24234",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-文献自动翻译",
      "key": 1,
      "rules": [
        {
          "matches": "@ViewGroup[clickable=true] >2 ImageView + [text=\"查看译文\"][visibleToUser=true]",
          "actionMaximum": 2,
          "activityIds": ".main.article.ReadArticleActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/28420222",
          "excludeSnapshotUrls": "https://i.gkd.li/i/28420227",
          "exampleUrls": [
            "https://e.gkd.li/e8b59267-7cfe-4a9a-b421-891e6b924c75",
            "https://e.gkd.li/33fc101f-a8f9-42e8-8606-9802ccc58572"
          ],
          "key": 0
        }
      ]
    }
  ]
});

// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "fiil+",
  "id": "com.fengeek.f002",
  "groups": [
    {
      "name": "功能类-自动连接耳机",
      "desc": "点击连接耳机按钮,点击扫描到的第一个设备",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.fengeek.f002:id/av_elc\"]",
          "action": "clickCenter",
          "fastQuery": true,
          "key": 0,
          "name": "点击连接耳机按钮",
          "snapshotUrls": "https://i.gkd.li/i/13161277"
        },
        {
          "matches": "[id=\"com.fengeek.f002:id/device_container\"]",
          "preKeys": [
            4
          ],
          "fastQuery": true,
          "key": 1,
          "name": "点击扫描到的设备",
          "snapshotUrls": "https://i.gkd.li/i/13161365"
        },
        {
          "matches": "[vid=\"av_elc\"]",
          "action": "clickCenter",
          "fastQuery": true,
          "key": 2,
          "name": "点击连接耳机按钮",
          "snapshotUrls": "https://i.gkd.li/i/13161277"
        },
        {
          "matches": "[vid=\"device_container\"]",
          "preKeys": [
            4
          ],
          "fastQuery": true,
          "key": 3,
          "name": "点击扫描到的设备",
          "snapshotUrls": "https://i.gkd.li/i/13161365"
        },
        {
          "matches": "[clickable=true][id=\"com.fengeek.f002:id/av_elc\"]",
          "action": "clickCenter",
          "fastQuery": true,
          "key": 4,
          "name": "点击连接耳机按钮",
          "snapshotUrls": "https://i.gkd.li/import/13161277"
        },
        {
          "matches": "[clickable=true][id=\"com.fengeek.f002:id/device_container\"]",
          "action": "clickNode",
          "preKeys": [
            4
          ],
          "fastQuery": true,
          "key": 5,
          "name": "点击扫描到的设备",
          "snapshotUrls": "https://i.gkd.li/import/13161365"
        }
      ]
    },
    {
      "name": "未分类-自动连接耳机",
      "desc": "点击连接耳机按钮,点击扫描到的第一个设备",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[clickable=true][id=\"com.fengeek.f002:id/av_elc\"]",
          "action": "clickCenter",
          "fastQuery": true,
          "key": 0,
          "name": "点击连接耳机按钮",
          "snapshotUrls": "https://i.gkd.li/i/13161277"
        },
        {
          "matches": "[clickable=true][id=\"com.fengeek.f002:id/device_container\"]",
          "action": "clickNode",
          "preKeys": [
            0
          ],
          "fastQuery": true,
          "key": 1,
          "name": "点击扫描到的设备",
          "snapshotUrls": "https://i.gkd.li/i/13161365"
        }
      ]
    },
    {
      "name": "自动连接耳机",
      "desc": "点击连接耳机按钮,点击扫描到的第一个设备",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[clickable=true][id=\"com.fengeek.f002:id/av_elc\"]",
          "action": "clickCenter",
          "quickFind": true,
          "key": 0,
          "name": "点击连接耳机按钮",
          "snapshotUrls": "https://i.gkd.li/import/13161277"
        },
        {
          "matches": "[clickable=true][id=\"com.fengeek.f002:id/device_container\"]",
          "action": "clickNode",
          "preKeys": [
            0
          ],
          "quickFind": true,
          "key": 1,
          "name": "点击扫描到的设备",
          "snapshotUrls": "https://i.gkd.li/import/13161365"
        }
      ]
    }
  ]
});

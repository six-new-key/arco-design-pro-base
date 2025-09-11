<template>
  <a-space>
    <a-button type="primary">Primary</a-button>
    <a-button>Secondary</a-button>
    <a-button type="dashed">Dashed</a-button>
    <a-button type="outline">Outline</a-button>
    <a-button type="text">Text</a-button>
    <a-button @click="handleNotification">
      Open Notification
    </a-button>
    <a-button @click="handleClick">Info Message</a-button>
  </a-space>
</template>

<script setup>
import { Message, Notification } from './utils'

const handleNotification = () => {
  Notification.info({
    title: 'Notification',
    content: 'This is a notification!',
  })
}

const handleClick = () => {
  Message.error('This is a message!')
}
</script>

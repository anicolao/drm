<script lang="ts">
  import { useTask, useThrelte } from '@threlte/core';

  export let progress: number | '';
  export let rendered: (progress: number | '') => void;

  const { autoRenderTask } = useThrelte();
  useTask(() => rendered(progress), {
    after: autoRenderTask,
    autoInvalidate: false,
  });
</script>

<script>
  import EmailAuthView from './EmailAuthView.svelte'
  import SocialAuthView from './SocialAuthView.svelte'
  import MagicLinkView from './MagicLinkView.svelte'
  import ForgottenPasswordView from './ForgottenPasswordView.svelte'

  let classes = ''

  export let supabaseClient
  export { classes as class }
  export let style = ''
  export let socialLayout = 'vertical'
  export let socialColors = false
  export let providers = []
  export let view = 'sign_in'
  export let redirectAfterLogin = ""

  function setView(newView) {
    view = newView
  }
</script>

<div class="component {classes}" {style}>
  <div class="container">
    <SocialAuthView
      {supabaseClient}
      {providers}
      {socialLayout}
      {socialColors}
      {view}
      {redirectAfterLogin}
    />

    {#if view == 'sign_in' || view == 'sign_up'}
      <EmailAuthView {supabaseClient} {view} {setView} {redirectAfterLogin}/>
    {:else if view == 'magic_link'}
      <MagicLinkView {supabaseClient} {setView}/>
    {:else if view == 'forgotten_password'}
      <ForgottenPasswordView {supabaseClient} {setView}/>
    {/if}
  </div>
</div>
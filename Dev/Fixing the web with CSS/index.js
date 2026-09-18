document.addEventListener('DOMContentLoaded', () => {
    const copyButtons = document.querySelectorAll('.copy-btn');

    copyButtons.forEach(button => {
        button.addEventListener('click', async () => {
            const wrapper = button.closest('.code-block-wrapper');
            const codeBlock = wrapper.querySelector('code');
            const codeText = codeBlock.innerText;

            try {
                await navigator.clipboard.writeText(codeText);
                
                // Visual feedback on click
                button.textContent = 'Copied!';
                button.classList.add('copied');

                // Reset button text after 2 seconds
                setTimeout(() => {
                    button.textContent = 'Copy';
                    button.classList.remove('copied');
                }, 2000);
            } catch (err) {
                console.error('Failed to copy code: ', err);
                button.textContent = 'Failed';
            }
        });
    });
});
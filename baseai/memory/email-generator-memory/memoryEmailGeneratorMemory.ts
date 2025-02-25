import {MemoryI} from '@baseai/core';

const memoryEmailGeneratorMemory = (): MemoryI => ({
	name: 'email-generator-memory',
	description: "contains my resume",
	git: {
		enabled: true,
		include: ['**/*'],
		gitignore: true,
		deployedAt: '',
		embeddedAt: '4260e810b4f6d2375ef347a009e89e9573e756e9'
	}
});

export default memoryEmailGeneratorMemory;
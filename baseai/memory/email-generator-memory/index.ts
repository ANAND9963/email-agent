import {MemoryI} from '@baseai/core';

const memoryEmailGeneratorMemory = (): MemoryI => ({
	name: 'email-generator-memory',
	description: "contains my resume",
	git: {
		enabled: true,
		include: ['**/*'],
		gitignore: true,
		deployedAt: '',
		embeddedAt: ''
	}
});

export default memoryEmailGeneratorMemory;
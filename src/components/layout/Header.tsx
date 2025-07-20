'use client';

import {
  Box,
  Flex,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
} from '@chakra-ui/react';
import { IoChevronDown } from 'react-icons/io5';
import { useState } from 'react';

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'es', name: 'Spanish', flag: '🇪🇸' },
  { code: 'fr', name: 'French', flag: '🇫🇷' },
  { code: 'it', name: 'Italian', flag: '🇮🇹' },
  { code: 'pt', name: 'Portuguese', flag: '🇵🇹' },
];

interface HeaderProps {
  onPractiseClick?: () => void;
  onSettingsClick?: () => void;
}

export default function Header({ onPractiseClick, onSettingsClick }: HeaderProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language);
  };

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      bg={bgColor}
      borderBottom="1px"
      borderColor={borderColor}
      px={6}
      py={3}
      shadow="sm"
    >
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
        {/* Left side */}
        <Flex align="center" gap={6}>
          {/* Logo */}
          <Text
            fontSize="xl"
            fontWeight="bold"
            color="blue.500"
            cursor="pointer"
            _hover={{ color: 'blue.600' }}
          >
            LINGSTER
          </Text>
          
          {/* Navigation buttons */}
          <Flex gap={4}>
            <Button
              variant="ghost"
              fontWeight="medium"
              onClick={onPractiseClick}
              _hover={{ bg: 'gray.100' }}
            >
              PRACTISE
            </Button>
            <Button
              variant="ghost"
              fontWeight="medium"
              onClick={onSettingsClick}
              _hover={{ bg: 'gray.100' }}
            >
              SETTINGS
            </Button>
          </Flex>
        </Flex>

        {/* Right side - Language selector */}
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<IoChevronDown />}
            variant="outline"
            size="sm"
            minW="120px"
          >
            <Flex align="center" gap={2}>
              <Text fontSize="lg">{selectedLanguage.flag}</Text>
              <Text fontSize="sm">{selectedLanguage.name}</Text>
            </Flex>
          </MenuButton>
          <MenuList>
            {languages.map((language) => (
              <MenuItem
                key={language.code}
                onClick={() => handleLanguageSelect(language)}
                bg={selectedLanguage.code === language.code ? 'blue.50' : 'transparent'}
              >
                <Flex align="center" gap={3}>
                  <Text fontSize="lg">{language.flag}</Text>
                  <Text>{language.name}</Text>
                </Flex>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
}
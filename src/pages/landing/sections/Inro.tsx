import { Box, Flex, Heading, Icon, Link, Text } from "@chakra-ui/react";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Inro = () => {
  return (
    <Box w="full" bg="blue.900" px="200px" pt="60px">
      <Flex justifyContent="space-between">
        <Heading> חיים נעימים במדבר </Heading>
        <Box maxWidth="300px">
          <Text color="whiteAlpha.700" pb="20px">
            מזמינים אתכם לחוויה קולינרית נפלאה: אוכל של בית, טעים ובריא, שמתבשל
            אצלנו במטבח עם תבלין האהבה. הארוחות מוגשות בטברנה הקסומה שלנו
            המשקיפה אל הנוף המדברי והרי אדום. התפריט מאוד מגוון, ובהזמנה מראש
            אתם בוחרים מה תרצו לאכול: *ארוחת דגים *ארוחה בשרית *ארוחה
            צמחונית/טבעונית ב'חיים נעימים במדבר' אנחנו מאוד אוהבים ליצור לכם
            אווירה חמימה ותחושה של בית. המקום מתאים למשפחות, זוגות וקבוצות של עד
            30 אנשים. *הזמנות מראש בלבד* מחכים לכם באהבה, שמוליק ונעמה נעמה
            050-6325428 שמוליק 050-5408359
          </Text>
          <Link color="whiteAlpha.800">
            Explore more
            <Icon as={FiArrowUpRight} ml="10px" h={5} w={5} />
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Inro;

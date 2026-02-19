# CS624 Full-Stack Development - Mobile App
**Term:** Winter 2026 | **Author:** David Hiltzman | **Assignment:** PE04

## Overview

The IPO (Input–Process–Output) model describes how a program receives inputs, performs computations, and returns results. It divides work into three categories: a requirement from the environment (input), a computation (process), and a result provided back (output).

## Profile Card Styling App

Built on the HOS05 Styling app, this React Native component displays a styled profile card with a user avatar, name, occupation, and biography, following Section 4.3 "Styling Text Components" from *React Native in Action*.

| Step | Description |
|------|-------------|
| **Input** | Static profile data: name, occupation, and bio text |
| **Process** | StyleSheet styles applied to each Text and View element |
| **Output** | Rendered Profile Card displayed on screen |

## Pseudocode

```
Function ProfileCard
    Declare String name       = "John Doe"
    Declare String occupation = "React Native Developer"
    Declare String bio        = "John is a really great JavaScript developer..."

    Output cardContainer
        Output avatar image
        Output name (bold, white, shadow)
        Output occupation (bold, underline border)
        Output bio (italic)
    End
End
```

## Output

![Profile Card Component](./assets/images/Selection_027.png)

*Figure 1: Finished Profile Card — avatar, name, occupation with underline, and biography on a blue card.*

## References

1. Dabit, N. (2019). *React Native in Action*. Manning Publications. ISBN 9781617294051.
2. React Native Documentation. (n.d.). Style. https://reactnative.dev/docs/style
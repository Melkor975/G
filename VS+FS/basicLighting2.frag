#version 330 core

in vec4 frontColor;
out vec4 fragColor;

in vec3 normalF;
in vec3 colorF;
in vec2 texCoordF;
uniform mat3 normalMatrix;
void main()
{
   
    vec3 N = normalize(normalMatrix * normalF);
    fragColor = vec4 (colorF, 1.0) * N.z;
}

# Django - Troubleshooting

This is the place where we collect all the problems we had with our
Django App and how we solved them for future reference.

## Add new packages to existing docker image

To add a new pip package to your already existing docker image of this project.

1. PIP install your desired packages

2. Freeze your packages

```bash
pip freeze > requirements.txt
```

3. Rebuild the docker image

```bash
docker-compose build
```


4. Re-Run the docker image

```bash
docker-compose up
```